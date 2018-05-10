class CreatePaints < ActiveRecord::Migration[5.2]
  def change
    create_table :paints do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :category , null: false
      t.string :photo , null: false
      t.boolean :approved, :default => true
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
