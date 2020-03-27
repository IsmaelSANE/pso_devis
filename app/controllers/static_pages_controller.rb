class StaticPagesController < ApplicationController

  def home
    @home_page = true
  end

  def help
    @devis_page = true
  end

  def about
  end
end
