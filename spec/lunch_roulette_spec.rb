require File.join(File.dirname(__FILE__), '../lib/lunch_roulette.rb')

describe LunchRoulette do
  let(:roulette) { LunchRoulette.new(Date.today) }
  let(:robert) { stub(:name => 'Robert') }
  let(:kermit) { stub(:name => 'Kermit') }
  let(:miss_piggy) { stub(:name => 'Miss Piggy') }

  context 'with 2 registered participants' do
    it 'no lunch will be scheduled' do
      robert = stub(:name => 'Robert')
      kermit = stub(:name => 'Kermit')

      roulette.join(robert)
      roulette.join(kermit)

      robert.should_receive(:no_lunch_today)
      kermit.should_receive(:no_lunch_today)

      roulette.run
    end
  end

  context 'with 3 participants' do
    it 'will schedule a lunch for all of them' do
      robert.should_receive(:lunch, :with => [kermit, miss_piggy])
      
      kermit.should_receive(:lunch, :with => [robert, miss_piggy])
      miss_piggy.should_receive(:lunch, :with => [kermit, robert])

      roulette.join(robert)
      roulette.join(kermit)
      roulette.join(miss_piggy)

      roulette.run
    end
  end
end

