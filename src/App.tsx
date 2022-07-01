/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { useEffect, useRef, ReactElement } from "react";
import { Wrapper, Status } from "@/components/MyMapComponent";

import "./App.css";

const render = (status: Status): any => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

function MyMapComponent({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = useRef<any>();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" />;
}

function App() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  console.log("dasds");

  return (
    <div className="test_map">
      <Wrapper apiKey="test-my-key" render={render}>
        <MyMapComponent center={center} zoom={zoom} />
      </Wrapper>
    </div>
  );
}

export default App;
