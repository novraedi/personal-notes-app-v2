import React from "react";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import NoteList from "../components/NoteList";
import HomePageAction from "../components/HomePageAction";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }
  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }
  render() {
    const filteredNotes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    const activeNotes = filteredNotes.filter((note) => note.archived === false);
    return (
      <section>
        <h2>Catatan Aktif</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NoteList notes={activeNotes} />
        <HomePageAction />
      </section>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
