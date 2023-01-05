/*
 *  Copyright 2023 Collate.
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
/*
 *  Copyright 2023 Collate
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

import { Skeleton } from 'antd';
import { uniqueId } from 'lodash';
import { SkeletonInterface } from 'Models';
import React from 'react';

import { dataInsightsSkeletonMock } from './DataInsight.mock';

const DataInsightsLeftPanelSkeleton = ({
  loading,
  children,
}: SkeletonInterface) => {
  return loading ? (
    <div className="m-b-md p-xs">
      {dataInsightsSkeletonMock.map(() => (
        <Skeleton.Button
          active
          block
          className="p-xs"
          key={uniqueId()}
          size="small"
        />
      ))}
    </div>
  ) : (
    children
  );
};

export default DataInsightsLeftPanelSkeleton;