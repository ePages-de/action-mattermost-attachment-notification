# Mattermost Attachment Notification Action

This action allows you to send attachment-like messages to your Mattermost.

## Inputs

| Name                | Description                                                                                                                         | Required |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------|----------|
| `webhook`           | Webhook URI.                                                                                                                        | `true`   |
| `text`              | Text to be included in the attachment. It can be formatted using Markdown.                                                          | `true`   |
| `notification_type` | Left border color for the attachment by string. One of `success`, `warning`, `danger` and `info`. Defaults to `info`.               | `false`  |
| `color`             | Hex color code that will be used as the left border color for the attachment. Overrides `notification_type`.                        | `false`  |
| `channel`           | Channel message will be posted in or username to send direct message.                                                               | `false`  |
| `username`          | Username the message posts as.                                                                                                      | `false`  |
| `icon_url`          | Profile picture the message posts with.                                                                                             | `false`  |
| `fallback`          | A required plain-text summary of the attachment.                                                                                    | `false`  |
| `pretext`           | Line of text that will be shown above the attachment.                                                                               | `false`  |
| `author_name`       | Name used to identify the author.                                                                                                   | `false`  |
| `author_link`       | URL used to hyperlink the `author_name`.                                                                                            | `false`  |
| `author_icon`       | URL used to display a 16x16 pixel icon beside the `author_name`.                                                                    | `false`  |
| `title`             | Title displayed below the author information in the attachment.                                                                     | `false`  |
| `title_link`        | URL used to hyperlink the `title`.                                                                                                  | `false`  |
| `image_url`         | URL to an image file (GIF, JPEG, PNG, BMP, or SVG) that is displayed inside a message attachment.                                   | `false`  |
| `thumb_url`         | URL to an image file (GIF, JPEG, PNG, BMP, or SVG) that is displayed as a 75x75 pixel thumbnail on the right side of an attachment. | `false`  |
| `footer`            | Line of text that will be displayed at the bottom of the attachment.                                                                | `false`  |
| `footer_icon`       | URL to an image file (GIF, JPEG, PNG, BMP, or SVG) that is displayed as a 16x16 pixel thumbnail before the footer text.             | `false`  |

> ⚠️ Currently this GitHub Action does not support sending `fields` as a key in the attachment.

## Usage

```yml
jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - uses: ePages-de/action-mattermost-attachment-notification@main
        with:
          webhook: ${{ secrets.MATTERMOST_WEBHOOK }}
          text: Application successfully deployed
          notification_type: success
```
