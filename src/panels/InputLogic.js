import React from 'react';
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {Input, IOS} from "@vkontakte/vkui";
import Autosuggest from ' react-autosuggest';
const CommandArray = new Map([
    ['m', 'масса(кг)'],
    ['p', 'плотность(кг/м^3)'],
    ['F', 'сила(Н)']
]);
const searchElement = value => {
    const inputValue = value.trim();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : CommandArray.filter(cmd =>
        cmd.name.slice(0, inputLength) === inputValue
    );
};
const Logic = value => {
    
}

export default Logic;