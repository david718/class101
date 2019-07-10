import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateAnnouncement } from "../states/announcement/actions";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

interface IProps {
  announcementMessage: string;
  updateAnnouncement: any;
}

interface IState {}

class IndexPage extends React.Component<IProps, IState> {
  render() {
    const { announcementMessage, updateAnnouncement } = this.props;
    return (
      <>
        <Title>class101 과제</Title>
        <div>
          <Link
            href={{
              pathname: "products"
            }}
          >
            <a>수업 목록 페이지</a>
          </Link>
        </div>
        <div>
          <Link
            href={{
              pathname: "wishlist"
            }}
          >
            <a>장바구니 페이지</a>
          </Link>
        </div>
        <div>
          Announcement: {announcementMessage}
          <button onClick={() => updateAnnouncement("We are closed today!")}>
            Close!
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  announcementMessage: state.message
});

const mapDispatchToProps = (dispatch: any) => ({
  updateAnnouncement: bindActionCreators(updateAnnouncement, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
