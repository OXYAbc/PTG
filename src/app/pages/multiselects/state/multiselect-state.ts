import { State, Action, StateContext, Selector } from '@ngxs/store';

export class CheckboxSelection {
  static readonly type = '[Checkbox] Toggle selected';
  constructor(public checkboxType: string, public payload: string) {}
}

@State<{ [key: string]: string[] }>({
  name: 'checkboxSelection',
  defaults: {
    simpleMSelect: [],
    groupeMSelect: []
  },
})
export class CheckboxSelectionState {
  @Selector()
  static getSelectedOptions(state: { [key: string]: string[] }) {
    return state;
  }

  @Action(CheckboxSelection)
  toggleSelectedOption(
    ctx: StateContext<{ [key: string]: string[] }>,
    action: CheckboxSelection
  ) {
    const state = ctx.getState();
    const checkboxType = action.checkboxType;
    const index = state[checkboxType].indexOf(action.payload);
    if (index > -1) {
      state[checkboxType].splice(index, 1);
    } else {
      state[checkboxType].push(action.payload);
    }
    ctx.setState({ ...state });
  }
}
