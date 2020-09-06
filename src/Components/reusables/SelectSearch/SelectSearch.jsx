import React, { Component } from "react";
import ReactSelectSearch2, { components } from "react-select";
import "./SelectSearch.scss"

const menuHeaderStyle = {
  padding: "8px 12px",
  background: "white",
  color: "black"
};

const MenuList = props => {
  return (
    <components.MenuList {...props}>
      {props.children}

      <div style={menuHeaderStyle}>
        <button className="btn btn-sm btn-default pull-right loadMoreButton">
          Load more
        </button>
      </div>
    </components.MenuList>
  );
};

class SelectSearch extends Component {
  handleScrolledToBottom = () => {
    this.props.loadMoreData && this.props.onMenuScrollToBottom(this.props.name);
  }
  render() {
    let {
      options,
      onInputChange,
      onChange,
      isClearable,
      placeholder,
      value,
      components,
      isDisabled,
      isSearchable,
      getOptionLabel,
      getOptionValue,
      // onMenuScrollToBottom,
      // exScroll
    } = this.props;
    return (
      <ReactSelectSearch2
        components={components ? { MenuList } : {}}
        isDisabled={isDisabled}
        value={value}
        options={options}
        onInputChange={onInputChange}
        isClearable={isClearable}
        onChange={onChange}
        placeholder={placeholder}
        isSearchable={isSearchable}
        onMenuScrollToBottom={() => this.handleScrolledToBottom()}
        // onMenuScrollToBottom={onMenuScrollToBottom}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "silver",
            // primary: "black"
            primary: "#939393"
          }
        })}
      />
    );
  }
}
export default SelectSearch;
