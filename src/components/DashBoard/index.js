import { Component } from "react";
import { TbDashboard, TbUserSquareRounded } from "react-icons/tb";
import { AiOutlineTransaction } from "react-icons/ai";
import { GrSchedules } from "react-icons/gr";
import { RiSettings5Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlinePreview } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  // Tooltip,
  Legend,
} from "recharts";

import {
  DashBoardContainer,
  DashOptions,
  DashViews,
  Title,
  SlideBarContainer,
  RouteItemContainer,
  Dash,
  RouteHeading,
  ContactUsContainer,
  DashNav,
  DashHeading,
  DashNavItems,
  ProfileImg,
  DashSearch,
  SearchContainer,
  TotalViewContainer,
  ViewLabel,
  ViewCount,
  ViewCart,
} from "./styledComponents";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

class DashBoard extends Component {
  dashBoardChart = () => (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      <YAxis />
      {/* <Tooltip /> */}
      <Legend type="none" />
      <Line type="natural" dataKey="pv" stroke="#8884d8" />
      <Line type="natural" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
  render() {
    return (
      <DashBoardContainer>
        <DashOptions>
          <Title>Board.</Title>
          <SlideBarContainer>
            <RouteItemContainer>
              <Dash>
                <TbDashboard size="20" />
                <RouteHeading>DashBoard</RouteHeading>
              </Dash>
              <Dash>
                <AiOutlineTransaction size="20" />
                <RouteHeading>Transactions</RouteHeading>
              </Dash>
              <Dash>
                <GrSchedules size="20" />
                <RouteHeading>Schedules</RouteHeading>
              </Dash>
              <Dash>
                <TbUserSquareRounded size="20" />
                <RouteHeading>Users</RouteHeading>
              </Dash>
              <Dash>
                <RiSettings5Line size="20" />
                <RouteHeading>Settings</RouteHeading>
              </Dash>
            </RouteItemContainer>
            <ContactUsContainer>
              <RouteHeading>Help</RouteHeading>
              <RouteHeading>ContactUs</RouteHeading>
            </ContactUsContainer>
          </SlideBarContainer>
        </DashOptions>
        <DashViews>
          <DashNav>
            <DashHeading>DashBoard</DashHeading>
            <DashNavItems>
              <SearchContainer>
                <DashSearch type="text" placeholder="search...." />
                <CiSearch />
              </SearchContainer>

              <FaRegBell />
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </DashNavItems>
          </DashNav>
          <TotalViewContainer>
            <ViewCart line="#ddefe0">
              <MdOutlinePreview size={25} />
              <ViewLabel>Total Revenues</ViewLabel>
              <ViewCount>$2,18,840</ViewCount>
            </ViewCart>
            <ViewCart line="#F4ECDD">
              <MdOutlinePreview size={25} />
              <ViewLabel>Total Revenues</ViewLabel>
              <ViewCount>$2,18,840</ViewCount>
            </ViewCart>
            <ViewCart line="#EFDADA">
              <MdOutlinePreview size={25} />
              <ViewLabel>Total Revenues</ViewLabel>
              <ViewCount>$2,18,840</ViewCount>
            </ViewCart>
            <ViewCart line="#DEE0EF">
              <MdOutlinePreview size={25} />
              <ViewLabel>Total Revenues</ViewLabel>
              <ViewCount>$2,18,840</ViewCount>
            </ViewCart>
          </TotalViewContainer>
          {this.dashBoardChart()}
        </DashViews>
      </DashBoardContainer>
    );
  }
}

export default DashBoard;
