import * as React from "react"

enum ButtonNames {
    backspace = "delete",
    equals = "equals",
    escape = "clear",
    zero = "0",
    one = "1",
    two = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    seven = "7",
    eight = "8",
    nine = "9",
    multiply = "multiply",
    plus = "plus",
    minus = "minus",
    separator = "separator",
    divide = "divide",
    percent = "percent",
    plus_minus = "plus-minus"
}

enum ButtonTypes {
    Digit = "Digit",
    Operator = "Operator",
    System = "System",
    Separator = "Separator",
    Sign = "Sign"
}

interface ButtonProps {
    name: ButtonNames
    type: ButtonTypes
    label: string
    isDisabled: boolean
    onClick: any
}

class BaseButton extends React.PureComponent<ButtonProps> {
    name: ButtonNames
    type: string
    label: string
    isDisabled: boolean | false
    onClick: Function

    constructor(props: ButtonProps) {
        super(props)

        this.name = this.props.name
        this.type = this.props.type
        this.label = this.props.label
        this.isDisabled = this.props.isDisabled
        this.onClick = this.props.onClick
    }

    render() {
        return (
            <button
                disabled={this.props.isDisabled}
                onClick={this.props.onClick}
            >
                {this.props.label}
            </button>
        )
    }
}

class Digit extends BaseButton { }
class Operator extends BaseButton { }
class Separator extends BaseButton { }
class System extends BaseButton { }
class Sign extends BaseButton { }

export class Button extends React.PureComponent<{
    name: ButtonNames,
    type: ButtonTypes,
    label: string,
    isDisabled: boolean,
    onClick: Function
}, {}> {

    private getButtonComponent() {
        const ComponentTypeMap = {
            Digit,
            Operator,
            System,
            Separator,
            Sign
        }

        return ComponentTypeMap[this.props.type]
    }

    render() {
        const Button = this.getButtonComponent()
        return (
            <Button {...this.props} />
        )
    }
}