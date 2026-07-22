package core

type BelkavpnError struct {
	IsBelkavpnError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewBelkavpnError(code string, msg string, ctx *Context) *BelkavpnError {
	return &BelkavpnError{
		IsBelkavpnError: true,
		Sdk:              "Belkavpn",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *BelkavpnError) Error() string {
	return e.Msg
}
