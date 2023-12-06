/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'Can I say “deaf people”?',
    contents: (
      <div>
        If you thought this term was offensive, you are mistaken. It is the way they prefer to be called. On the other hand, using deaf-mute is wrong, deaf people have a voice and muteness is a different disability.
      </div>
    ),
  },
  {
    title: 'Is Sign Language made up of “signs” or “gestures”?',
    contents: (
      <div>
        At some point you must have come across the term “gestures” when referring to ASL, right? While signs are how people communicate in Sign Languages, gestures are just movements people often use as part of their communicative act.
      </div>
    ),
  },
  {
    title: `Is there a difference between deaf and hearing impaired people?`,
    contents: (
      <div>
        From a clinical point of view, what differentiates the deaf from the hearing impaired is the depth of the hearing loss. However, taking into consideration only the clinical perspective is not enough, since the different terms also carry an important cultural component: American Sign Language.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Curiosity"
          slogan="Deaf Community Common Mistakes"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
