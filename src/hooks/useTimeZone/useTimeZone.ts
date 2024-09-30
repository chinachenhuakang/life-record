import { useState, useEffect } from 'react';

import { getTimezone, timezoneKey } from './../../utils/utils';
import useRefreshLocalStorage from './useRefreshLocalStorage';

function useTimezone() {
  const [TimeZone, setTimeZone] = useState(() => getTimezone());
  const [storageValue] = useRefreshLocalStorage(timezoneKey());

  useEffect(() => {
    setTimeZone(() => getTimezone());
  }, [storageValue]);

  return [TimeZone];
}

export default useTimezone;
