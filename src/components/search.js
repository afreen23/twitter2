import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import { Link} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import classNames from 'classnames';
import { InputAdornment } from 'material-ui/Input';


const suggestions = [
  { label: '#adhaar' },
  { label: '#Aland Islands' },
  { label: '#Albania' },
  { label: '#Algeria' },
  { label: '#American Samoa' },
  { label: '#Andorra' },
  { label: '#Angola' },
  { label: '#Anguilla' },
  { label: '#Antarctica' },
  { label: '#Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
];

function renderInput(inputProps) {
  const { classes, autoFocus, value, ref, ...other } = inputProps;

  
  return (
    <TextField
      type='search'
      className={classes.textField}
      value={value}
      inputRef={ref}
      InputProps={{
        disableUnderline:true,
        endAdornment:<InputAdornment position='end'><IconButton className={classNames(classes.search,'fa','fa-search')}/></InputAdornment>,
       
        classes: {
          root: classes.textFieldRoot,
          input: classes.textFieldInput,
        },
        ...other,
      }}
    >
      <IconButton className={classNames(classes.search,'fa','fa-search')}></IconButton>
    </TextField>
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);
  

  return (
    <Link to={`/search`}><MenuItem  selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem></Link>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

const styles = theme => ({
  container: { 
    position: 'relative',
    height: 200,
  },
  div: {
    display:'flex'
  },
  search: {
    marginTop: -10,
    color: 'rgba(128, 128, 128, 0.37)',
    fontWeight: 100
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  textField: {
    width: '',
  },
  textFieldRoot: {
    width: 'calc(100% - 24px)',
    height: '30px',
    padding: 0,
    border: '1px solid #19CF86',
    borderRadius: 21,
    fontSize: 16,
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    alignItems: 'flex-start',
    margin: '5px 0'
  },
  textFieldInput: {
    width: 'calc(100% - 100px)',
    padding: '5px 20px',
    borderRadius: 50,
    backgroundColor: theme.palette.common.white,
    margin: '1px 0 0 1px',
    fontSize: 15,

  },
});

class IntegrationAutosuggest extends React.Component {
  state = {
    value: '',
    suggestions: [],
    method: '',
    suggestionSelected: false
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = (event, { newValue,method }) => {
    this.setState({
      value: newValue,
      method: method
    });
  };
  render() {
    const { classes } = this.props;

    return (
    <div className={classes.div}>  
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={(event,{suggestion,SuggestionValue})=>{}}
        inputProps={{
          autoFocus: true,
          classes,
          placeholder: 'Search',
          value: this.state.value,
          onChange: this.handleChange
        }}
      />
    </div>  
    );
  }
}

IntegrationAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntegrationAutosuggest);
// 'label + &': {
//      marginTop: theme.spacing.unit * 3,
 //   },

 /*
 'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
 */