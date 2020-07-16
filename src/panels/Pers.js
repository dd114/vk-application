import React from 'react';
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {Input, IOS, platform, View} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import persik from "../img/persik.png";
import {DemoComponent} from "./test";
const testtt = DemoComponent
const osName = platform();
const Pers = (props) => (
    <View>
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={props.go} data-to="home">
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
                not a Persik
            </PanelHeader>
        </Panel>
        {DemoComponent}
    </View>
);
// <Input type="text"/>

Pers.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};
export default Pers;
//spinner/progress- для загрузки
//input-поле ввода
//https://www.npmjs.com/package/react-autosuggest
