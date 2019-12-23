import React, { Component } from 'react';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import axios from 'axios';
import Navbar from './navbar/Navbar';
import styled from 'styled-components';
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMsg: '',
      posts: [],
      loading: true
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=de683980dfd14cff8754bd92cec2932e'
      )
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data, loading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMsg: 'error retreveing data', loading: false });
      });
  }

  render() {
    const { errorMsg, posts, loading } = this.state;
    const PostList = styled.div`
      .card {
        border: 1px solid rgb(233, 233, 233);
        &-img {
          height: 100px;
          width: 100%;
        }
        img {
          width: 100%;
        }
        &-content {
          padding: 20px;
        }
      }
      .flex-direction {
        display: flex;
        flex-direction: column;
      }
    `;

    return (
      <PostList>
        {loading ? (
          <>loading....</>
        ) : (
          <>
            <Navbar />
            <div className='container'>
              <div className='row'>
                {posts && posts.articles
                  ? posts.articles.map((post, key) =>
                      key === 0 ? (
                        <div className='col-md-8' key={key}>
                          <div className='card'>
                            <img src={post.urlToImage}></img>

                            <div className='card-content'>
                              <div className='card-content-title'>
                                {post.title}
                              </div>
                              <div className='card-content-date'>
                                {post.publishedAt}
                              </div>
                              <div className='card-content-description'>
                                {post.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : key === 1 || key === 2 ? (
                        <div className='flex-direction'>
                          {key === 1 ? (
                            <div className='card' key={key}>
                              {console.log('toto')}
                              <img src={post.urlToImage}></img>
                            </div>
                          ) : (
                            <div className='card' key={key}>
                              {console.log('ulum')}
                              <img src={post.urlToImage}></img>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className='col-md-4' key={key}>
                          <div className='card'>
                            <img src={post.urlToImage}></img>

                            <div className='card-content'>
                              <div className='card-content-title'>
                                {post.title}
                              </div>
                              <div className='card-content-date'>
                                {post.publishedAt}
                              </div>
                              <div className='card-content-description'>
                                {post.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )
                  : null}
                {errorMsg ? <div>{errorMsg}</div> : null}
              </div>
            </div>
          </>
        )}
      </PostList>
    );
  }
}

export default PostList;
