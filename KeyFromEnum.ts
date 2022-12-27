enum OperationSymbolsEnum {
    "percent" = "%",
    "divide" = "/",
    "multiply" = "*",
    "minus" = "-",
    "plus" = "+",
    "plus-minus" = "±",
    "separator" = ".",
    "equals" = "="
}

type keys = keyof typeof OperationSymbolsEnum

interface IOperationSymbols {
    name: keyof typeof OperationSymbolsEnum
}

type OperationSymbols = Partial<Record<keys, IOperationSymbols[]>>