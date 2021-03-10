class VacationsController < ApplicationController

    def index 
        @vacations = Vacation.all 

        render json: @vacations
    end

    def show 
        @vacation = Vacation.find(params[:id])

        render json: @vacation
    end

    

end
