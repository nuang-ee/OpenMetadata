/*
 *  Copyright 2022 Collate.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../constants/constants';
import ErrorFallback from './ErrorFallback';

interface Props {
  children: React.ReactNode;
}

const ErrorBoundry: React.FC<Props> = ({ children }) => {
  const history = useHistory();

  const onErrorReset = () => {
    history.push(ROUTES.HOME);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={onErrorReset}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundry;
