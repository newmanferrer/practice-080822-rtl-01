import { useState, useEffect } from 'react';
import { getFiveRandomUsersFemaleAxios } from '../../services';
import { IUser } from '../../models';
import { Loader, Message } from '../';
import { FlexContainerStyled, H4Styled, ImgStyled } from './StyledComponents';

const initialErrorState = { hasError: false, message: '' };

export const RandomUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [errorState, setErrorState] = useState(initialErrorState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setErrorState(initialErrorState);
    getFiveRandomUsersFemaleAxios()
      .then(data => setUsers(data.results))
      .catch(error => handleError(error))
      .finally(() => setIsLoading(false));
  }, []);

  const handleError = (error: any) => {
    setErrorState({ hasError: true, message: error.message });
  };

  return (
    <FlexContainerStyled width='60vw' border>
      {isLoading && <Loader />}
      {!isLoading && errorState.hasError && (
        <Message dataTestid='message' type='error' text={errorState.message} />
      )}
      {!isLoading &&
        !errorState.hasError &&
        users &&
        users.map((user, index) => (
          <FlexContainerStyled
            key={`${user.id.value}-${user.cell}`}
            data-testid={`user-number-${index}`}
            width='95%'
            flexDirection='row'
            border
          >
            <FlexContainerStyled>
              <ImgStyled src={user.picture.thumbnail} alt='user image' />
            </FlexContainerStyled>
            <FlexContainerStyled>
              <H4Styled>
                {user.name.title}. {user.name.first} {user.name.last}
              </H4Styled>
            </FlexContainerStyled>
          </FlexContainerStyled>
        ))}
    </FlexContainerStyled>
  );
};
