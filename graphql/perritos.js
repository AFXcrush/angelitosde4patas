import { gql } from "@apollo/client";

const PERRITOS = gql`
  query GetPerrito {
    perritos {
      id
      nombre
      edad_estimada
      estado
      foto {
        url
      }
      historia
    }
  }
`;

export { PERRITOS };
