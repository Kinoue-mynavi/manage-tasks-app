import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

import { Link } from '.';

test('The `target` property is output correctly.', async () => {
  const external = render(<Link href="http://www.facebook.com">Facebook</Link>);
  expect(external.baseElement).toMatchSnapshot();

  const internal = render(<Link href="/">Home</Link>);
  expect(internal.baseElement).toMatchSnapshot();
});
