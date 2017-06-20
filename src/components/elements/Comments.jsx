import React from 'react'
import Link from 'react-router/lib/Link'
import $ from 'jquery'

import BaseComponent from '../common/BaseComponent'
import Title from '../common/Title'

class Comments extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Title title="Comments">Comments display user feedback on a website</Title>
        <div className="example comments">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h5>Full feature comments</h5>
            <p>Comments with headers, content and metadata are classified as full feature comments</p>
          </div>
          <div className="module collapsed">
            <div className="comment">
              <div className="avatar">
                <img src="/images/365cons_otter.jpg" alt="" />
              </div>
              <div className="content">
                <a className="creator">Johnny Grimes</a>
                <span className="meta">Wednesday at 4:32PM</span>
                <p className="text">
                  Hey guys, I&#39;m Johnny, call me J! Just joined the business, looking forward to working with you all.
                </p>
                <div className="actions">
                  <a className="action">Reply</a>
                  <a className="action">Share</a>
                  <a className="action">Delete</a>
                </div>
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example comments">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h5>Minimal comments</h5>
            <p>Minimal comments do not contain actions or metadata</p>
          </div>
          <div className="module collapsed">
            <div className="comment">
              <div className="avatar">
                <img src="/images/365cons_otter.jpg" alt="" />
              </div>
              <div className="content">
                <a className="creator">Johnny Grimes</a>
                <p className="text">
                  Hey guys, I&#39;m Johnny, call me J! Just joined the business, looking forward to working with you all.
                </p>
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example comments">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h5>Comment replies</h5>
            <p>Replies to comments are indented inwards</p>
          </div>
          <div className="module collapsed">
            <div className="comment">
              <div className="avatar">
                <img src="/images/365cons_dino.jpg" alt="" />
              </div>
              <div className="content">
                <a className="creator">Isabelle Jenkins</a>
                <span className="meta">Wednesday at 5:17PM</span>
                <p className="text">
                  Welcome Johnny, good to have you onboard.
                </p>
                <div className="actions">
                  <a className="action">Reply</a>
                </div>
                <div className="replies">
                  <div className="comment">
                    <div className="avatar">
                      <img src="/images/365cons_otter.jpg" alt="" />
                    </div>
                    <div className="content">
                      <a className="creator">Johnny Grimes</a>
                      <span className="meta">Thursday at 8:28AM</span>
                      <span className="meta"></span>
                      <p className="text">
                        Thank you Isabelle!
                      </p>
                      <div className="actions">
                        <a className="action">Reply</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example forum">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h5>Embedded reply</h5>
            <p>Replies to a specific comment are indented within a comment</p>
          </div>
          <div className="module collapsed">
            <div className="comments">
              <div className="comment">
                <div className="avatar">
                  <img src="/images/365cons_otter.jpg" alt="" />
                </div>
                <div className="content">
                  <a className="creator">Johnny Grimes</a>
                  <span className="meta">Wednesday at 4:32PM</span>
                  <p className="text">
                    Hey guys, I&#39;m Johnny, call me J! Just joined the business, looking forward to working with you all.
                  </p>
                  <div className="actions">
                    <a className="action active">Reply</a>
                    <a className="action">Share</a>
                    <a className="action">Hide</a>
                  </div>
                  <div className="reply">
                    <div className="input">
                      <textarea name="reply"></textarea>
                    </div>
                    <div className="group">
                      <div className="submit button blue labeled">
                        <i className="fa fa-edit"></i>
                        Send reply
                      </div>
                      <div className="discard button default float-right">
                        Discard
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
        <div className="example comments">
          <div className="explanation"><a className="view-source"><i className="fa fa-code"/></a>
            <h5>Full width reply</h5>
            <p>Replies to a comment thread take up the width of a container</p>
          </div>
          <div className="module collapsed">
            <div className="comments">
              <div className="comment">
                <div className="avatar">
                  <img src="/images/365cons_otter.jpg" alt="" />
                </div>
                <div className="content">
                  <a className="creator">Johnny Grimes</a>
                  <span className="meta">Wednesday at 4:32PM</span>
                  <p className="text">
                    Hey guys, I&#39;m Johnny, call me J! Just joined the business, looking forward to working with you all.
                  </p>
                  <div className="actions">
                    <a className="action">Reply</a>
                  </div>
                </div>
              </div>
              <div className="comment">
                <div className="avatar">
                  <img src="/images/365cons_dino.jpg" alt="" />
                </div>
                <div className="content">
                  <a className="creator">Isabelle Jenkins</a>
                  <span className="meta">Wednesday at 5:17PM</span>
                  <p className="text">
                    Welcome Johnny, good to have you onboard.
                  </p>
                  <div className="actions">
                    <a className="action">Reply</a>
                  </div>
                  <div className="replies">
                    <div className="comment">
                      <div className="avatar">
                        <img src="/images/365cons_otter.jpg" alt="" />
                      </div>
                      <div className="content">
                        <a className="creator">Johnny Grimes</a>
                        <span className="meta">Thursday at 8:28AM</span>
                        <span className="meta"></span>
                        <p className="text">
                          Thank you Isabelle!
                        </p>
                        <div className="actions">
                          <a className="action">Reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment">
                <div className="avatar">
                  <img src="/images/365cons_panda.jpg" alt="" />
                </div>
                <div className="content">
                  <a className="creator">Stuee Brown</a>
                  <span className="meta">Friday at 10:36AM</span>
                  <p className="text">
                    What&#39;s up Johnny!
                  </p>
                  <div className="actions">
                    <a className="action">Reply</a>
                  </div>
                </div>
              </div>
              <div className="reply">
                <div className="input">
                  <textarea name="reply"></textarea>
                </div>
                <div className="group">
                  <div className="submit button blue labeled">
                    <i className="fa fa-edit"></i>
                    Send reply
                  </div>
                  <div className="discard button default float-right">
                    Discard
                  </div>
                </div>
              </div>
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
