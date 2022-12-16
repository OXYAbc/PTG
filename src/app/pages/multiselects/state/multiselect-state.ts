import { State, Action, StateContext, Selector } from '@ngxs/store';

export class CheckboxSelection {
  static readonly type = '[Checkbox] Toggle selected';
  constructor(public payload: string) {}
}

@State<string[]>({
  name: 'checkboxSelection',
  defaults: []
})
export class CheckboxSelectionState {

  @Selector()
    static getSelectedOptions(state: string[]) {
        return state;
    }

  @Action(CheckboxSelection)
    toggleSelectedOption(ctx: StateContext<string[]>, action: CheckboxSelection) {
        const state = ctx.getState();
        const index = state.indexOf(action.payload);
        if (index > -1) {
            state.splice(index, 1);
        } else {
            state.push(action.payload);
        }

        ctx.setState([...state]);
    }

}