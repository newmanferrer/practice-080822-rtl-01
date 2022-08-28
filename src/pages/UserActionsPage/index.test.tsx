import {
  render,
  screen,
  RenderResult,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  act
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { UserActionsPage } from '.';
import axios from 'axios';
import { IBaseURL } from '../../models';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
const mockedResolveExpectedResponse: IBaseURL = {
  results: [
    {
      gender: 'female',
      name: {
        title: 'Miss',
        first: 'Amanda',
        last: 'Ferrer'
      },
      location: {
        street: {
          number: 5239,
          name: 'Lone Wolf Trail'
        },
        city: 'Fountain Valley',
        state: 'Florida',
        country: 'United States',
        postcode: 53047,
        coordinates: {
          latitude: '82.3586',
          longitude: '-8.5342'
        },
        timezone: {
          offset: '-6:00',
          description: 'Central Time (US & Canada), Mexico City'
        }
      },
      email: 'herbert.armstrong@example.com',
      login: {
        uuid: '60387527-f627-4300-9262-5e316dfc90ca',
        username: 'greencat406',
        password: 'brighton',
        salt: '0AiBmbae',
        md5: '1067386941c376f6a7b61a2dc94e4983',
        sha1: '16f8d84814d663a6a51e76305d877ebd8f55b60a',
        sha256: 'a7c2211f004ee915005dffe74ef440d98894c71ec868b23d4878660aa13dc0b4'
      },
      dob: {
        date: '1995-12-06T15:39:46.696Z',
        age: 26
      },
      registered: {
        date: '2007-03-11T19:24:43.602Z',
        age: 15
      },
      phone: '(589) 860-7635',
      cell: '(673) 467-4058',
      id: {
        name: 'SSN',
        value: '032-67-1408'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/8.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/8.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/8.jpg'
      },
      nat: 'US'
    },
    {
      gender: 'female',
      name: {
        title: 'Mrs',
        first: 'Maria',
        last: 'Rasmussen'
      },
      location: {
        street: {
          number: 7134,
          name: 'Paltholmterrasserne'
        },
        city: 'Sundby/Erslev',
        state: 'Danmark',
        country: 'Denmark',
        postcode: 87569,
        coordinates: {
          latitude: '-22.9681',
          longitude: '13.3771'
        },
        timezone: {
          offset: '-11:00',
          description: 'Midway Island, Samoa'
        }
      },
      email: 'maria.rasmussen@example.com',
      login: {
        uuid: '8b45ac60-8d05-43bb-a61d-3aad70b9d2d7',
        username: 'blackmeercat969',
        password: 'simpson',
        salt: 'DRCwulFD',
        md5: 'b823e670fdbb8b3ce28167670fc179f2',
        sha1: '53302bd3cf4b928fa5e4fc530911b53d63ebf4b2',
        sha256: '4a329a3e63f86a95b999e2864eea095612aa131b45f17a7a466a972a5039af48'
      },
      dob: {
        date: '1958-10-22T10:56:17.654Z',
        age: 63
      },
      registered: {
        date: '2008-03-13T09:20:46.310Z',
        age: 14
      },
      phone: '17690680',
      cell: '65408201',
      id: {
        name: 'CPR',
        value: '221058-6319'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/78.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/78.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/78.jpg'
      },
      nat: 'DK'
    },
    {
      gender: 'female',
      name: {
        title: 'Mrs',
        first: 'Mustafasita',
        last: 'Sözeri'
      },
      location: {
        street: {
          number: 5961,
          name: 'Atatürk Sk'
        },
        city: 'Tekirdağ',
        state: 'Hatay',
        country: 'Turkey',
        postcode: 81327,
        coordinates: {
          latitude: '37.5880',
          longitude: '-12.8767'
        },
        timezone: {
          offset: '+4:30',
          description: 'Kabul'
        }
      },
      email: 'mustafa.sozeri@example.com',
      login: {
        uuid: '55387d29-f34d-42ca-b0ad-09971e412a62',
        username: 'silverswan759',
        password: 'bluefish',
        salt: 'Q0Ak5B27',
        md5: 'd66c17228e2629344f7521384f2f371b',
        sha1: '920e6d7ea210bea13b50430e3c62ffd982388bb0',
        sha256: 'da26386b3c8f84a7ab52a833a84363375e9f4e4de555ca22abba448e9bcd7e99'
      },
      dob: {
        date: '1959-07-08T04:27:49.595Z',
        age: 63
      },
      registered: {
        date: '2011-08-20T13:49:18.644Z',
        age: 10
      },
      phone: '(443)-693-8096',
      cell: '(728)-926-5894',
      id: {
        name: '',
        value: null
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/67.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/67.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/67.jpg'
      },
      nat: 'TR'
    },
    {
      gender: 'female',
      name: {
        title: 'Miss',
        first: 'Dalia',
        last: 'Zúñiga'
      },
      location: {
        street: {
          number: 7780,
          name: 'Circuito Tabasco'
        },
        city: 'Suchiapa',
        state: 'Veracruz',
        country: 'Mexico',
        postcode: 77139,
        coordinates: {
          latitude: '73.8319',
          longitude: '139.2092'
        },
        timezone: {
          offset: '+5:45',
          description: 'Kathmandu'
        }
      },
      email: 'dalia.zuniga@example.com',
      login: {
        uuid: '3bba90b6-cbf6-42e7-9e2c-db47a774af6d',
        username: 'yellowfish691',
        password: 'flesh',
        salt: 'u1zDh2ge',
        md5: '587fd4fbe5129707e2b99f1364dac14c',
        sha1: '4c00e6aa121ee4d6d8971ba86903fac23e73f3aa',
        sha256: 'd2754a461cf722afc9b1bdbe8460d016e150354075cbab2728f7a3a63a1d1928'
      },
      dob: {
        date: '1949-07-06T00:08:35.761Z',
        age: 73
      },
      registered: {
        date: '2019-05-03T14:32:11.136Z',
        age: 3
      },
      phone: '(690) 376 8444',
      cell: '(655) 395 9832',
      id: {
        name: 'NSS',
        value: '01 56 58 4165 1'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/37.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/37.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/37.jpg'
      },
      nat: 'MX'
    },
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Dalia',
        last: 'Ordóñez'
      },
      location: {
        street: {
          number: 1028,
          name: 'Prolongación Sur Jimínez'
        },
        city: 'Estación Llano',
        state: 'Campeche',
        country: 'Mexico',
        postcode: 57114,
        coordinates: {
          latitude: '-89.3663',
          longitude: '169.6980'
        },
        timezone: {
          offset: '+7:00',
          description: 'Bangkok, Hanoi, Jakarta'
        }
      },
      email: 'dalia.ordonez@example.com',
      login: {
        uuid: 'ab3df499-de6a-484f-8cc6-deb5d672d115',
        username: 'goldenbutterfly990',
        password: 'terefon',
        salt: 'i1DDzjL6',
        md5: '85dfb50b3e4151777ec1718489c674c2',
        sha1: 'a3811acb50f740809bbb3471c06b8f9ea9071efd',
        sha256: 'f0395a9fed340f432af16cf724c87b1eb1ca0f6195f5a19c42249afab9f0c5d2'
      },
      dob: {
        date: '1981-02-23T04:34:35.039Z',
        age: 41
      },
      registered: {
        date: '2017-01-08T10:16:04.895Z',
        age: 5
      },
      phone: '(666) 044 3480',
      cell: '(651) 026 4886',
      id: {
        name: 'NSS',
        value: '15 56 07 5031 3'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/80.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/80.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/80.jpg'
      },
      nat: 'MX'
    }
  ],
  info: {
    seed: '3c1c39947a1ed634',
    results: 5,
    page: 1,
    version: '1.4'
  }
};
const mockedRejectExpectedResponse = {
  message: 'Network error'
};

describe('test <UserActionsPage />', () => {
  let renderMethods: RenderResult;

  beforeEach(async () => {
    await act(() => {
      renderMethods = render(
        <BrowserRouter>
          <UserActionsPage />
        </BrowserRouter>
      );
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  describe('Counter', () => {
    //* ----------------------------------------------------------------------------------------------
    //* Firing Events Examples
    //* ----------------------------------------------------------------------------------------------
    it('test #1 (getByRole): should be show the text "7.- Counter for examples", in the document', () => {
      expect(
        screen.getByRole('heading', { level: 2, name: /^7\.\- Counter for examples$/ })
      ).toBeInTheDocument();
    });

    it('test #2 (getByRole): should be show the text "Counter: 0", in the document', () => {
      expect(screen.getByRole('heading', { level: 3, name: /^Counter: 0$/ })).toBeInTheDocument();
    });

    it('test #3 (getByRole): should be show the "buttons -1", in the document', () => {
      expect(screen.getByRole('button', { name: /^-1$/ })).toBeInTheDocument();
    });

    it('test #4 (getByRole): should be show the "buttons Reset", in the document', () => {
      expect(screen.getByRole('button', { name: /^Reset$/ })).toBeInTheDocument();
    });

    it('test #5 (getByRole): should be show the "buttons +1", in the document', () => {
      expect(screen.getByRole('button', { name: /^\+1$/ })).toBeInTheDocument();
    });

    it('test #6 (getByRole/fireEvent): should that the "Button +1", click just three time', () => {
      const buttonAdd = screen.getByRole('button', { name: /^\+1$/ });
      const h3 = screen.getByRole('heading', { level: 3, name: /^Counter: 0$/ });

      fireEvent.click(buttonAdd);
      fireEvent.click(buttonAdd);
      fireEvent.click(buttonAdd);

      expect(h3).toBeInTheDocument();
      expect(buttonAdd).toBeInTheDocument();
      expect(h3).toHaveTextContent(/^Counter: 3$/);
    });
    //* ----------------------------------------------------------------------------------------------
    //* ----------------------------------------------------------------------------------------------
    //* Async Methods Examples
    //* ----------------------------------------------------------------------------------------------
    it('test #7 (findByText/await): should that the "Button -1", click just one time', async () => {
      const button = screen.getByRole('button', { name: /^-1$/ });

      fireEvent.click(button);
      expect(await screen.findByText(/^Counter: -1$/)).toBeInTheDocument();
    });

    it('test #8 (getByText/waitFor): should that the "Button +1", click just two times and "Button Reset", click just one time', async () => {
      const buttonAddOne = screen.getByRole('button', { name: /^\+1$/ });
      const buttonReset = screen.getByRole('button', { name: /^Reset$/ });

      fireEvent.click(buttonAddOne);
      fireEvent.click(buttonAddOne);
      await waitFor(() => expect(screen.getByText(/^Counter: 2$/)).toBeInTheDocument());

      fireEvent.click(buttonReset);
      await waitFor(() => expect(screen.getByText(/^Counter: 0$/)).toBeInTheDocument());
    });

    it('test #9 (findByText/waitFor): should that the "Button -1", click just two times and "Button Reset", click just one time', async () => {
      const buttonSubtractOne = screen.getByRole('button', { name: /^-1$/ });
      const buttonReset = screen.getByRole('button', { name: /^Reset$/ });

      fireEvent.click(buttonSubtractOne);
      fireEvent.click(buttonSubtractOne);
      await waitFor(async () =>
        expect(await screen.findByText(/^Counter: -2$/)).toBeInTheDocument()
      );

      fireEvent.click(buttonReset);
      await waitFor(async () =>
        expect(await screen.findByText(/^Counter: 0$/)).toBeInTheDocument()
      );
    });
    //* ----------------------------------------------------------------------------------------------
    //* ----------------------------------------------------------------------------------------------
    //* Considerations for fireEvent
    //* ----------------------------------------------------------------------------------------------
    it('test #10: should  that the "button +1", click just two times', () => {
      const buttonAdd = screen.getByRole('button', { name: /^\+1$/ });

      fireEvent.mouseMove(buttonAdd);
      fireEvent.mouseOver(buttonAdd);
      fireEvent.mouseDown(buttonAdd);
      fireEvent.mouseUp(buttonAdd);
      fireEvent.click(buttonAdd);
      fireEvent.click(buttonAdd);

      expect(screen.getByText(/^Counter: 2$/)).toBeInTheDocument();
    });
    //* ----------------------------------------------------------------------------------------------
  });

  describe('Random Users', () => {
    it('test #11: should be show the text "8.- Random Users for examples", in the document', () => {
      expect(
        screen.getByRole('heading', { level: 2, name: /^8\.\- Random Users for examples$/ })
      ).toBeInTheDocument();
    });

    it('test #12: should show "loader component", in the document', async () => {
      const { getByAltText } = render(
        <BrowserRouter>
          <UserActionsPage />
        </BrowserRouter>
      );

      await act(() => {
        waitFor(() => expect(getByAltText(/^Loading...$/)).toBeInTheDocument());
      });
    });

    it('test #13: should not show "loader component", in the document', async () => {
      const { queryByAltText } = render(
        <BrowserRouter>
          <UserActionsPage />
        </BrowserRouter>
      );

      await waitForElementToBeRemoved(() => queryByAltText(/^Loading...$/));
      expect(queryByAltText(/^Loading...$/)).not.toBeInTheDocument();
    });

    it('test #14: should that "randomuser api", called and response ok', async () => {
      const url = 'https://randomuser.me/api/?results=5&gender=female';

      mockedAxios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: mockedResolveExpectedResponse })
      );

      const { findAllByTestId } = render(
        <BrowserRouter>
          <UserActionsPage />
        </BrowserRouter>
      );

      const users = await findAllByTestId(/user-number-/);

      expect(mockedAxios.get).toHaveBeenCalled();
      expect(mockedAxios.get).toHaveBeenCalledTimes(2);
      expect(mockedAxios.get).toHaveBeenCalledWith(url);
      expect(users).toHaveLength(5);
    });

    it('test #15: should show first user in the document', async () => {
      mockedAxios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: mockedResolveExpectedResponse })
      );

      const { findByTestId } = render(
        <BrowserRouter>
          <UserActionsPage />
        </BrowserRouter>
      );

      const firstUser = await screen.findByTestId(/user-number-0/);
      expect(firstUser).toBeInTheDocument();
    });

    it('test #16: should show error message in the document', async () => {
      mockedAxios.get.mockImplementationOnce(() => Promise.reject(mockedRejectExpectedResponse));

      await act(() => {
        render(
          <BrowserRouter>
            <UserActionsPage />
          </BrowserRouter>
        );
      });

      expect(screen.getByText(/^Network error$/)).toBeInTheDocument();
    });
  });
});

//* -------------------------------------------------------------------------------------
//* NOTES:
//* -------------------------------------------------------------------------------------
//* 1.- Don't remove the "await" from the "act" inside the "beforeEach"
//*     With this, we wait for all the changes of our states (setState, useEffect, etc.),
//*     before carrying out the tests of our components.
//* -------------------------------------------------------------------------------------
