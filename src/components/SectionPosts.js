import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {getPages, Link, withPrefix} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionPosts extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let display_posts = _.orderBy(getPages(this.props.pages, '/partner'), 'date', 'desc');
        let recent_posts = display_posts.slice(0, _.get(section, 'posts_number', null));
        return (
            <section id={_.get(section, 'section_id', null)} className="block block-posts">
              {_.get(section, 'title', null) && (
              <h2 className="block-title underline inner-sm">{_.get(section, 'title', null)}</h2>
              )}
              <div className="post-feed">
                <div className="post-feed-inside">
                  {_.map(display_posts, (post, post_idx) => (
                    post.approved && (
                      <article key={post_idx} className="post post-card">
                        <div className="post-inside">
                          {_.get(post, 'img_path', null) && (
                          <Link className="post-thumbnail" href={withPrefix(_.get(post, 'stackbit_url_path', null))}><img src={withPrefix(_.get(post, 'img_path', null))} alt={_.get(post, 'img_alt', null)} /></Link>
                          )}
                          <header className="post-header">
                            <h3 className="post-title"><Link href={withPrefix(_.get(post, 'stackbit_url_path', null))} rel="bookmark">{_.get(post, 'title', null)}</Link></h3>
                          </header>
                          {_.get(post, 'subtitle', null) && (
                          <div className="post-content">
                            <p>{_.get(post, 'subtitle', null)}</p>
                          </div>
                          )}
                        </div>
                      </article>
                    )
                  ))}
                </div>
              </div>
              {_.get(section, 'actions', null) && (
              <div className="block-buttons inner-sm">
                <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
              </div>
              )}
            </section>
        );
    }
}
