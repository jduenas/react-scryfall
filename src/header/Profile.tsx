import React from "react";
import styled from "styled-components";

export interface ProfileProps {
  name: string;
  pictureUri: string;
  className?: string;
}

const StyledImage = styled.img`
  background: gray;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

const ProfileContainer = styled.div`
  display: flex;
  margin-right: 15px;
`;

const DisplayName = styled.span`
  display: inline-block;
  align-self: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
`;

const Profile = (props: ProfileProps) => {
  return (
    <ProfileContainer>
      <StyledImage
        className={props.className}
        src={props.pictureUri}
      ></StyledImage>
      <DisplayName>{props.name}</DisplayName>
    </ProfileContainer>
  );
};

export default Profile;
