using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SecondLife.Migrations
{
    /// <inheritdoc />
    public partial class fifth : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Picture",
                table: "tbl_ads",
                newName: "Picture4");

            migrationBuilder.AddColumn<byte[]>(
                name: "Picture1",
                table: "tbl_ads",
                type: "varbinary(max)",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "Picture2",
                table: "tbl_ads",
                type: "varbinary(max)",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "Picture3",
                table: "tbl_ads",
                type: "varbinary(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "tbl_favourites",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserDetailsId = table.Column<int>(type: "int", nullable: false),
                    AdToFavId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbl_favourites", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tbl_favourites_tbl_ads_AdToFavId",
                        column: x => x.AdToFavId,
                        principalTable: "tbl_ads",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tbl_favourites_tbl_user_details_UserDetailsId",
                        column: x => x.UserDetailsId,
                        principalTable: "tbl_user_details",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tbl_favourites_AdToFavId",
                table: "tbl_favourites",
                column: "AdToFavId");

            migrationBuilder.CreateIndex(
                name: "IX_tbl_favourites_UserDetailsId",
                table: "tbl_favourites",
                column: "UserDetailsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tbl_favourites");

            migrationBuilder.DropColumn(
                name: "Picture1",
                table: "tbl_ads");

            migrationBuilder.DropColumn(
                name: "Picture2",
                table: "tbl_ads");

            migrationBuilder.DropColumn(
                name: "Picture3",
                table: "tbl_ads");

            migrationBuilder.RenameColumn(
                name: "Picture4",
                table: "tbl_ads",
                newName: "Picture");
        }
    }
}
