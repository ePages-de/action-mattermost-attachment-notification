const core = require('@actions/core');
const HttpClient = require('@actions/http-client').HttpClient;

async function run() {
  const http = new HttpClient();
  const colors = {
    success: '#2EB886',
    warning: '#E3B341',
    danger: '#E01E5A',
    info: '#439FE0',
  };

  try {
    const webhookUri = core.getInput('webhook');

    if (!webhookUri) {
      core.setFailed('You have to provide webhook input');
      return;
    }

    const text = core.getInput('text');

    if (!text) {
      core.setFailed('You have to provide text param');
      return;
    }

    let payload = {};

    payload.channel  = core.getInput('channel');
    payload.username = core.getInput('username');
    payload.icon_url = core.getInput('icon_url');

    let attachment = {};

    attachment.fallback    = core.getInput('fallback');
    attachment.color       = core.getInput('color') ?? colors[core.getInput('notification_type')] ?? colors['info'];
    attachment.pretext     = core.getInput('pretext');
    attachment.author_name = core.getInput('author_name');
    attachment.author_link = core.getInput('author_link');
    attachment.author_icon = core.getInput('author_icon');
    attachment.title       = core.getInput('title');
    attachment.title_link  = core.getInput('title_link');
    attachment.text        = core.getInput('text');
    attachment.image_url   = core.getInput('image_url');
    attachment.thumb_url   = core.getInput('thumb_url');
    attachment.footer      = core.getInput('footer');
    attachment.footer_icon = core.getInput('footer_icon');

    payload.attachments = [attachment];

    await http.postJson(webhookUri, payload);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
