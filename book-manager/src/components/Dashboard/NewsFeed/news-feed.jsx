import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import '../../../styles.sass';
import {top100Films} from "../../../shared/constants";
import type {FilmOptionType} from "../../../shared/dtos";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

class NewsFeed extends Component {
  state = {

  }

  render() {

    return (
      <div className="container">
        <div className="news-feed-filters">
          <Autocomplete
            multiple
            options={top100Films}
            disableCloseOnSelect
            getOptionLabel={(option: FilmOptionType) => option.title}
            renderOption={(option: FilmOptionType, { selected }) => (
              <React.Fragment>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </React.Fragment>
            )}
            style={{ width: 500 }}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Checkboxes"
                placeholder="Favorites"
                fullWidth
              />
            )}
          />
        </div>
        <div className="news-feed-container">

        </div>
      </div>
    )
  }
}

export default withRouter(NewsFeed);