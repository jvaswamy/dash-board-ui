import styled from "styled-components";

export const DashBoardContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  padding: 20px;
`;

export const DashOptions = styled.div`
  width: 25%;
  background-color: #000000;
  border-radius: 18px;
  padding-left: 25px;
  padding-bottom: 28px;
  padding-top: 12px;
`;
export const Title = styled.h1`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
`;
export const SlideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 88vh;
`;
export const RouteItemContainer = styled.ul`
  padding-left: 0px;
`;
export const Dash = styled.li`
  color: #ffffff;
  list-style-type: none;
  display: flex;
  align-items: center;
  margin-bottom: 28px;
`;
export const RouteHeading = styled.p`
  color: #ffffff;
  font-size: 19px;
  margin: 0px;
  margin-left: 8px;
`;
export const ContactUsContainer = styled.div``;

// dashView

export const DashViews = styled.div`
  width: 75%;
`;

export const DashNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DashHeading = styled.h1`
  color: #000000;
  font-size: 32px;
`;

export const DashNavItems = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfileImg = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 12px;
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 5px 10px;
  margin-right: 12px;
  height: 20px;
`;
export const DashSearch = styled.input`
  border: none;
  outline: none;
`;

export const TotalViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ViewCart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${(props) => props.line};
  align-items: flex-end;
  border-radius: 12px;
  max-width: 100px;
  flex-grow: 1;
`;
export const ViewLabel = styled.p`
  margin: 0px;
  align-self: flex-start;
`;
export const ViewCount = styled.p`
  align-self: flex-start;
  font-size: 25px;
  margin: 0px;
`;
// export const abd = styled.span``;
// export const abd = styled.span``;
// export const abd = styled.span``;
// export const abd = styled.span``;
// export const abd = styled.span``;
// export const abd = styled.span``;
