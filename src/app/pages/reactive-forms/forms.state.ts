import { State, Action, Selector, StateContext } from '@ngxs/store';

export interface UserStateModel {
  name: string;
  email: string;
  password: string;
  type: string;
}

export class SetUserData {
  static readonly type = '[User] Set User Data';
  constructor(public user: UserStateModel) {}
}

export class SetUserName {
  static readonly type = '[User] Set User Name';
  constructor(public name: string) {}
}

export class SetUserEmail {
  static readonly type = '[User] Set User Email';
  constructor(public email: string) {}
}

export class SetUserPassword {
  static readonly type = '[User] Set User Password';
  constructor(public password: string) {}
}

export class SetUserType {
  static readonly type = '[User] Set User Type';
  constructor(public type: string) {}
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    name: 'name',
    email: 'email',
    password: 'pasword',
    type: 'user',
  }
})
export class FormUserState {
  @Selector()
  static getState(state: UserStateModel) {
    return state;
  }
  @Selector()
  static getName(state: UserStateModel) {
    return state.name;
  }
  @Selector()
  static getEmail(state: UserStateModel) {
    return state.email;
  }
  @Selector()
  static getType(state: UserStateModel) {
    return state.type;
  }
  @Selector()
  static getPassword(state: UserStateModel) {
    return state.password;
  }

  @Action(SetUserData)
  setUserData({ patchState }: StateContext<UserStateModel>, action: SetUserData) {
    patchState(action.user);
  }

  @Action(SetUserName)
  setUserName({ patchState }: StateContext<UserStateModel>, action: SetUserName) {
    patchState({ name: action.name });
  }

  @Action(SetUserEmail)
  setUserEmail({ patchState }: StateContext<UserStateModel>, action: SetUserEmail) {
    patchState({ email: action.email });
  }

  @Action(SetUserType)
  setUserType({ patchState }: StateContext<UserStateModel>, action: SetUserType) {
    patchState({ type: action.type });
  }

  @Action(SetUserPassword)
  setUserPassword({ patchState }: StateContext<UserStateModel>, action: SetUserPassword) {
    patchState({ password: action.password });
  }
}