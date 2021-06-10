import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import "./directory.styles.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ title, imageUrl, linkUrl, id, size }) => {
      return (
        <MenuItem
          linkUrl={linkUrl}
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
        />
      );
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    sections: selectDirectorySections(state),
  };
};

export default connect(mapStateToProps)(Directory);
