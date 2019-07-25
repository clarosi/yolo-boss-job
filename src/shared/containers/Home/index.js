import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { LOCATION, DEGREE, EXP_LVL, JOB, SEARCH } from '../../constants/icons';
import { PAGER_SIZE } from '../../constants/number';
import { getJobs } from '../../../store/actions';

import {
  Header,
  Box,
  Form,
  FormGroup,
  Textbox,
  Button,
  JobsFound,
  Wrapper,
  JobWrapper,
  DetailsWrapper,
  JobTitle,
  SalaryRange,
  CompanyLocation,
  Degree,
  ExperienceLevel,
  JobType,
  CompanyName,
  PostedTime,
  Icon,
  Img,
  FancyButton,
  Spinner,
  Pagination
} from '../../components/Common';

const Home = props => {
  const [query, setQuery] = useState('');
  const { getJobs, jobs, page, total_pages, total_num, loading } = props;

  useEffect(() => {
    getJobs({});
  }, [getJobs]);

  const onChangeHandler = e => {
    setQuery(e.target.value);
  };

  const onSearchHandler = () => {
    if (!query) return;
    getJobs({ query });
  };

  const onPaginationHandler = page => {
    getJobs({ page });
  };

  const renderJobsFound = () => (
    <Wrapper>{!loading ? <JobsFound jobs={total_num} /> : null}</Wrapper>
  );

  const renderSpinner = () => {
    if (loading) return <Spinner />;
    return (
      <FancyButton onClick={() => onSearchHandler()}>
        <Icon className={SEARCH} />
      </FancyButton>
    );
  };

  const renderPagination = () => {
    if (loading)
      return (
        <Wrapper>
          <Spinner />
        </Wrapper>
      );
    if (total_num <= PAGER_SIZE) return null;
    return (
      <Wrapper>
        <Pagination
          onPagination={page => onPaginationHandler(page)}
          begin={page}
          end={total_pages}
        />
      </Wrapper>
    );
  };

  const renderJobs = () => {
    return jobs.map(job => {
      const {
        id,
        job_title,
        salary_range_from,
        salary_range_to,
        company_location,
        degree,
        xp_lvl,
        job_type,
        company_name,
        created_at
      } = job;

      return (
        <Wrapper key={id}>
          <JobWrapper>
            <DetailsWrapper>
              <JobTitle jobTitle={job_title} />
              <SalaryRange
                salaryFrom={salary_range_from}
                salaryTo={salary_range_to}
              />
            </DetailsWrapper>
            <DetailsWrapper>
              <Icon className={LOCATION} isPadded />
              <CompanyLocation companyLocation={company_location} />
              <Icon className={EXP_LVL} isPadded />
              <ExperienceLevel experienceLvl={xp_lvl} />
            </DetailsWrapper>
            <DetailsWrapper>
              <Icon className={DEGREE} isPadded />
              <Degree degree={degree} />
              <Icon className={JOB} isPadded />
              <JobType jobType={job_type} />
            </DetailsWrapper>
            <DetailsWrapper>
              <Img />
              <CompanyName companyName={company_name} />
              <PostedTime postedTime={created_at} />
            </DetailsWrapper>
          </JobWrapper>
        </Wrapper>
      );
    });
  };

  return (
    <Fragment>
      <Header />
      <Box>
        <Form>
          <FormGroup>
            {renderSpinner()}
            <Textbox
              value={query}
              onChange={e => onChangeHandler(e)}
              placeholder="Search for job title or company name"
            />
          </FormGroup>
          <FormGroup
            classNameIn="form-group-content-custom"
            classNameOut="form-group-custom"
          >
            <Button>Filter results</Button>
          </FormGroup>
        </Form>
      </Box>
      {renderJobsFound()}
      {renderJobs()}
      {renderPagination()}
    </Fragment>
  );
};

const mapStateToProps = state => {
  const { jobs, total_num, total_pages, page, loading } = state.job;
  return { jobs, total_num, total_pages, page, loading };
};

export default connect(
  mapStateToProps,
  { getJobs }
)(Home);
