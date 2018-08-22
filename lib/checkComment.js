'use strict';

module.exports = function checkComment(comment) {
    if (comment.text === undefined) throw new Error("You have to comment content");
    if (comment.ip === undefined) throw new Error("You have to provide ip");
    if (comment.source === undefined) throw new Error("You have to provide url source");

    const baseUrl = `https://${this.key}.rest.akismet.com/1.1/comment-check`;

    const params = new URLSearchParams();
    params.append('blog', comment.source);
    params.append('user_ip', comment.ip);
    params.append('comment_type', 'comment');
    params.append('comment_content', comment.text);

    return this.dispatch(baseUrl, params)
        .then(resp => (resp.data === true || resp.data === false) ? resp.data : "invalid")
};
