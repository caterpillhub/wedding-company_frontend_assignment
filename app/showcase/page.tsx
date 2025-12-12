import OptionShowcase from "@/components/option-showcase"

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Blue variants */}
        <div className="bg-white p-8 rounded-2xl shadow-md border-4 border-dashed border-purple-400">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Blue Options (Frame 14)</h2>
          <div className="space-y-4">
            <OptionShowcase label="Blue" variant="default" />
            <OptionShowcase label="Blue" variant="light" />
            <OptionShowcase label="Blue" variant="medium" />
          </div>
        </div>

        {/* Shoes variants */}
        <div className="bg-white p-8 rounded-2xl shadow-md border-4 border-dashed border-purple-400">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Shoes Options (Frame 13)</h2>
          <div className="space-y-4">
            <OptionShowcase label="Shoes" variant="default" />
            <OptionShowcase label="Shoes" variant="light" />
            <OptionShowcase label="Shoes" variant="medium" />
          </div>
        </div>

        {/* Moo variants */}
        <div className="bg-white p-8 rounded-2xl shadow-md border-4 border-dashed border-purple-400">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Moo Options (Frame 12)</h2>
          <div className="space-y-4">
            <OptionShowcase label="Moo" variant="default" />
            <OptionShowcase label="Moo" variant="light" />
            <OptionShowcase label="Moo" variant="medium" />
          </div>
        </div>

        {/* Two variants */}
        <div className="bg-white p-8 rounded-2xl shadow-md border-4 border-dashed border-purple-400">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Two Options (Frame 15)</h2>
          <div className="space-y-4">
            <OptionShowcase label="Two" variant="default" />
            <OptionShowcase label="Two" variant="light" />
            <OptionShowcase label="Two" variant="medium" />
          </div>
        </div>
      </div>
    </div>
  )
}
