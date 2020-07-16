import React, {useState, useCallback} from 'react';
import useAutoSuggest from 'react-use-autosuggest';
import {useMemo} from "react";
import {Input, Panel, View} from "@vkontakte/vkui";


const todos = [
    {
        title: 'Clean Kitchen',
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
//траблы здесь
export const DemoComponent = ()=>{
    const [titleInput, setTitleInput] = useState(' ');
    const [descriptionInput, setDescriptionInput] = useState(' ');
    //  Important to map using useMemo so that
    //  useAutoSuggest does not re-process the
    //  data every time the component updates,
    //  as Array.map returns a new reference.
    const previousTitles = useMemo(() => {
        return todos.map(({title}) => title);
    }, [todos]);
    const previousDescriptions = useMemo(() => {
        return todos.map(({description}) => description);
    }, [todos]);

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
    return (
        <Panel id="demoComponent">
            <Input
                type=" text"
                value={titleInput}
                name=" title"
                onChange={handleTitleInput}
            />
            < textarea
                onChange={handleDescriptionInput}
                name="description"
            >
        {descriptionInput}
      </textarea>

        </Panel>
    )
};

