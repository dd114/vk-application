import React, {useState, useCallback} from 'react';
import useAutoSuggest from 'react-use-autosuggest';
import {useMemo} from "react";
import {Button, Input, Panel, Textarea, View} from "@vkontakte/vkui";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";

let f;
const command = [
    {
        title: 'clean',
        description: 'The kitchen is getting messy and needs to be taken care of',
    },
    {
        title: 'Clean Bathroom',
        description: 'Have already taken out the trash but need to clean the sink as well',
    },
    {
        title: 'Call Mom',
        description: 'Already tried once, but have to call again',
    }
];
let UserData = new Map()

export const InputPanel = () => {

    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const previousTitles = useMemo(() => {
        return command.map(({title}) => title);
    }, [command]);
    const previousDescriptions = useMemo(() => {
        return command.map(({description}) => description);
    }, [command]);

    const titleSuggestions = useAutoSuggest(
        titleInput, previousTitles
    );
    const descriptionSuggestions = useAutoSuggest(
        descriptionInput, previousDescriptions
    );

    const handleTitleInput = useCallback(e => {
        setTitleInput(e.target.value);
    }, []);
    const handleDescriptionInput = useCallback(e => {
        setDescriptionInput(e.target.value);
    }, []);
//todo
    //Доделать нормальное отображение подсказки
    function checkData(text) {
        let flag = 0;
        text = String(text).trim()
        let cmd = text.split("=")[0]
        let x = text.split("=").pop()
        command.forEach(cd => {
            if (cd.title.indexOf(cmd.trim()) != -1) flag = 1
        })
        if (flag == 1) {
            UserData.set(cmd, x)
            flag = 0
        } else console.log("траблы")
        //else
    }


    return (
        <Panel id="demoComponent">
            <Input
                id="input"
                type="text"
                value={titleInput}
                name=" title"
                onChange={handleTitleInput}
            />
            <Button size="xl" level="2" onClick={
                function CallCheckData() {
                    f = document.getElementById("input").value;
                    checkData(f)
                }}>
                Ввести данные
            </Button>
            <Text weight="regular" style={{marginBottom: 16}}>{titleSuggestions}</Text>
        </Panel>
    )
};

//<Tooltip-подсказка