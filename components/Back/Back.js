import styled from "styled-components";

import BackBase from "./BackBase";

const Back = styled(BackBase)`
  background: #283c86;
  background: linear-gradient(
    to right bottom,
    #7883a4,
    #454d66,
    #454d664f
  );

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default Back;
