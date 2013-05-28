class Lunch
  def initialize(participants)
    @participants = participants
  end

  def schedule
    @participants.each do |participant|
      notify_participant(participant)
    end
  end
  
  def notify_participant(participant)
    lunch_partners = @participants.reject {|p| p == participant }
    participant.lunch(:with => lunch_partners)
  end
end

class LunchRoulette
  def initialize(date)
    @participants = []
  end

  def join(participant)
    @participants << participant
  end

  def run
    if enough_participants?
      schedule_lunch
    else
      cancel_lunch
    end
  end

  private

  def enough_participants?
    @participants.length >= 3
  end

  def cancel_lunch
    @participants.each(&:no_lunch_today)
  end

  def schedule_lunch
    Lunch.new(@participants).schedule
  end

end

