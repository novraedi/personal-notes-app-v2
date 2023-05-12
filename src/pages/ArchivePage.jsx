import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({
      keyword,
    });
  }

  return (
    <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class ArchivePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
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

    const archivedNotes = filteredNotes.filter(
      (note) => note.archived === true
    );

    return (
      <section className="archives-page">
        <h2>Catatan Arsip </h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NoteList notes={archivedNotes} />
      </section>
    );
  }
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivePageWrapper;
