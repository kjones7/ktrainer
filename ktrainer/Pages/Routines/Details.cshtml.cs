using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using ktrainer.Data;
using ktrainer.Models;

namespace ktrainer.Pages.Routines
{
    public class DetailsModel : PageModel
    {
        private readonly ktrainer.Data.ApplicationDbContext _context;

        public DetailsModel(ktrainer.Data.ApplicationDbContext context)
        {
            _context = context;
        }

        public Routine Routine { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Routine = await _context.Routine.FirstOrDefaultAsync(m => m.ID == id);

            if (Routine == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
