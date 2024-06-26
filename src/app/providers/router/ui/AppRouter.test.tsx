import { screen } from '@testing-library/react';

import { ERoles } from '@/entities/User';
import { getRouteAdmin, getRouteMain, getRouteProfile } from '@/shared/const/router';
import { mockedApi } from '@/shared/const/tests';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { AppRouter } from './AppRouter';

describe('app/AppRouter', () => {
  beforeAll(() => {
    mockedApi.get.mockResolvedValue({
      data: {
        id: 'string',
        firstName: 'string',
        lastName: 'string',
        age: 'string',
        city: 'string',
        username: 'string',
        avatar: 'string',
      },
    });
  });

  test('Page should be render', async () => {
    componentRender(<AppRouter />, {
      route: getRouteMain(),
    });

    const page = await screen.findByTestId('main-page');

    expect(page).toBeInTheDocument();
  });

  test('Page not found', async () => {
    componentRender(<AppRouter />, {
      route: '/jkfdkljldfk',
    });

    const page = await screen.findByTestId('not-found-page');

    expect(page).toBeInTheDocument();
  });

  test('Redirect to main if unauthorized', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });

    const page = await screen.findByTestId('main-page');

    expect(page).toBeInTheDocument();
  });

  test('Access if authorized', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          initialized: true,
          authData: {
            id: '1',
            username: 'yo',
          },
        },
      },
    });

    const page = await screen.findByTestId('profile-page');

    expect(page).toBeInTheDocument();
  });

  test("Redirect if authorized but hasn't role", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          initialized: true,
          authData: {
            id: '1',
            username: 'yo',
          },
        },
      },
    });

    const page = await screen.findByTestId('forbidden-page');

    expect(page).toBeInTheDocument();
  });

  test('Access if authorized and has role', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          initialized: true,
          authData: {
            id: '1',
            username: 'yo',
            roles: [ERoles.ADMIN],
          },
        },
      },
    });

    const page = await screen.findByTestId('admin-panel-page');

    expect(page).toBeInTheDocument();
  });
});
