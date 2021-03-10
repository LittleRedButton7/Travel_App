class UsersController < ApplicationController

    def index 
        @users = User.all

        render json: @users
    end

    def show 
        @user = User.find(params[:id])

        render json: @user
    end

    def create
        @newUser = User.create(
            name: params[:name],
            email: params[:email],
            vacation_id: params[:vacation_id]
        )
    end

end
