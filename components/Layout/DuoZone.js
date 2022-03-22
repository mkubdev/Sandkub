const DuoZone = ({ firstZone, secondeZone }) => {
  return (
    <>
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
        {/* Start main area*/}
        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          <div className="h-full border-2 border-gray-200 border-dashed rounded-lg"> 
            { firstZone }
          </div>
        </div>
        {/* End main area */}
      </main>
      <aside className="hidden relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200 overflow-y-auto">
        {/* Start secondary column (hidden on smaller screens) */}
        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          <div className="h-full border-2 border-gray-200 border-dashed rounded-lg">
            { secondeZone }
          </div>
        </div>
        {/* End secondary column */}
      </aside>
    </>
  );
};

export default DuoZone;
