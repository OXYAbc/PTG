import { HttpClient } from '@angular/common/http';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { Country } from 'src/app/@core/country-city.model';

export interface UserStateModel {
  name: string;
  email: string;
  password: string;
  type: string;
  places: string[];
  cities: string[];
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

export class SetUserPlaces {
  static readonly type = '[User] Set User Places';
  constructor(public places: string[]) {}
}
export class GetCities {
  static readonly type = '[User] Get User Cities';
  constructor(public cities: string[]) {}
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    name: 'name',
    email: 'email',
    password: 'pasword',
    type: 'user',
    places: ['New York', 'Berlin'],
    cities: [],
  },
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

  @Selector()
  static getPlaces(state: UserStateModel) {
    return state.places;
  }

  @Action(SetUserData)
  setUserData(
    { patchState }: StateContext<UserStateModel>,
    action: SetUserData
  ) {
    patchState(action.user);
  }

  @Action(SetUserName)
  setUserName(
    { patchState }: StateContext<UserStateModel>,
    action: SetUserName
  ) {
    patchState({ name: action.name });
  }

  @Action(SetUserEmail)
  setUserEmail(
    { patchState }: StateContext<UserStateModel>,
    action: SetUserEmail
  ) {
    patchState({ email: action.email });
  }

  @Action(SetUserType)
  setUserType(
    { patchState }: StateContext<UserStateModel>,
    action: SetUserType
  ) {
    patchState({ type: action.type });
  }

  @Action(SetUserPassword)
  setUserPassword(
    { patchState }: StateContext<UserStateModel>,
    action: SetUserPassword
  ) {
    patchState({ password: action.password });
  }

  @Action(SetUserPlaces)
  setUserPlaces(
    { patchState }: StateContext<UserStateModel>,
    action: SetUserPlaces
  ) {
    patchState({ places: action.places });
  }

  // @Action(GetCities)
  // getAvailableCity({ getState, setState }: StateContext<UserStateModel>) {
  //   const state = getState();

  //   return this.httpClient.get<Country[]>('assets/country-city.json').pipe(
  //     tap((data) => {
  //       let cities: string[] = [];
  //       data.forEach((countryData) => {
  //         if (state.places.includes(countryData.label)) {
  //           countryData.items.forEach((city) => {
  //             cities.push(city.value);
  //           });
  //         }
  //       });
  //       // setState({
  //       //   ...state,
  //       //   cities: result
  //       // });
  //     })
  //   );
  // }
}
