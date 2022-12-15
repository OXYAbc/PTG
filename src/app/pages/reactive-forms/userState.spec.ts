import { async, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import {
  FormUserState,
  SetUserData,
  SetUserEmail,
  SetUserName,
  SetUserPassword,
  SetUserType,
  UserStateModel,
} from './forms.state';

describe('FormUserState', () => {
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([FormUserState])],
    }).compileComponents();

    store = TestBed.inject(Store);
    store.reset({
      name: 'Imię',
      email: 'email',
      password: 'userpassword',
      type: 'user',
    });
  });

  it('', async () => {
    const name = store.selectSnapshot(FormUserState.getState);
    console.log('testn', name);
  });
  it('should return the UserStateModel', async () => {
    const expectedState: UserStateModel = {
      name: 'Imię',
      email: 'email',
      password: 'userpassword',
      type: 'user',
    };
    store.dispatch(new SetUserData(expectedState));
    const state = store.selectSnapshot(FormUserState.getState);

    expect(state).toEqual(expectedState);
  });

  it('should return the name', async () => {
    const expectedName = 'Imię';

    store.dispatch(new SetUserName(expectedName));
    const name = store.selectSnapshot(FormUserState.getName);

    expect(name).toEqual(expectedName);
  });

  it('should return the email', async () => {
    const expectedEmail = 'email';

    store.dispatch(new SetUserEmail(expectedEmail));
    const email = store.selectSnapshot(FormUserState.getEmail);

    expect(email).toEqual(expectedEmail);
  });

  it('should return the type', async () => {
    const expectedType = 'user';
    store.dispatch(new SetUserType(expectedType));

    const type = store.selectSnapshot(FormUserState.getType);

    expect(type).toEqual(expectedType);
  });

  it('should return the password', async () => {
    const expectedPassword = 'userpassword';

    store.dispatch(new SetUserPassword(expectedPassword));
    const password = store.selectSnapshot(FormUserState.getPassword);

    expect(password).toEqual(expectedPassword);
  });
});
