import ConsoleContainer from '../components/ConsoleContainer'

export default function Section({ params }: { params: { section: string } }) {
  return (
    <main>
      <ConsoleContainer title={params.section} />
    </main>
  )
}
