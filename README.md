# Buncome Relief Info

This is a first attempt to make the information in the Buncombe County daily updates more accessible for those without reliable internet, by using LLMs to summarize the key information that people will want.

## Get the Summaries

If you just want the summaries, they're in `/data/summaries` sorted by timestamp. The summaries before 10/7 should not be considered reliable.

## Accuracy

Attempts are being made to ensure the accuracy of the information, but since LLMs can make mistakes or make things up, there may be inaccuracies. If you find anything that's incorrect, open a pull request with the suggested change.

The summaries are generated in a few steps:

- Use Whisper for voice to text transcription
- Use GPT-4o-mini to generate a formatted version of the raw transcript
- A human reads the formatted version to verify it (as best as possible)
- Use GPT-4o-mini to generate the summary
- Manually edit, as necessary

This process is imperfect and I'm working on ways to improve it. Any informed suggestions are welcome.
