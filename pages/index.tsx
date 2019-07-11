import React from "react";
import Link from "next/link";
import { NextPage } from "next";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../states/actions";

interface Props {
  message: string;
  updateAnnouncement: any;
}

const index: NextPage<Props> = ({ message, updateAnnouncement }) => {
  return (
    <>
      <h1>class101 과제</h1>
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
        Announcement: {message}
        <button onClick={() => updateAnnouncement("We are closed today!")}>
          Close!
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  message: state.message
});

const mapDispatchToProps = (dispatch: any) => ({
  updateAnnouncement: bindActionCreators(actions.updateAnnouncement, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
