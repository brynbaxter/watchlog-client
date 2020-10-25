import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

import DiaryEntry from '../components/DiaryEntry';

export class home extends Component {
  state = {
    diaryEntries: null,
  };
  componentDidMount() {
    axios
      .get('/diaryEntries')
      .then((res) => {
        this.setState({
          diaryEntries: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    let recentDiaryEntriesMarkup = this.state.diaryEntries ? (
      this.state.diaryEntries.map((diaryEntry) => (
        <DiaryEntry key={diaryEntry.diaryEntryId} diaryEntry={diaryEntry} />
      ))
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          {recentDiaryEntriesMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile...</p>
        </Grid>
      </Grid>
    );
  }
}

export default home;
